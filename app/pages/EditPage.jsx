import React, { Component } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

import { PageWrapper, Card, CardContentWrapper } from "../components/Wrappers"
import { Title, BlueLink } from "../components/Typography"
import { FormGroup, SubLabel, Input, TextArea } from "../components/Form"
import { API_HOST, MAIN_HOST } from "../config"
import Loading from "../components/Loading"

const githubFlavoredMarkdownLink = "https://github.github.com/gfm/"

// s contins an enum of possible state values
const s = {
  Editting: 0,
  Saving: 1,
  Redirecting: 2
}

// RedAsterisk is used to mark fields as required
const RedAsterisk = props => {
  return <span style={{ color: "red" }}>*</span>
}

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: {
        title: "",
        slug: "",
        content: "",
        description: "",
        tags: []
      },

      currentState: s.Editting
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  componentWillMount() {
    let slug = this.props.match.params.slug
    if (slug !== "new") {
      axios
        .get(API_HOST + "/page/" + slug)
        .then(res => {
          this.setState(prev => {
            prev.page = res.data
            return prev
          })
        })
        .catch(err => console.log(err))
    }
  }

  handleChange(e) {
    let field = e.target.name
    let fieldValue = e.target.value

    this.setState(prevState => {
      if (field === "tags") {
        prevState.page[field] = fieldValue.split(", ")
      } else {
        prevState.page[field] = fieldValue
      }
      return prevState
    })
  }

  handleEditSubmit(e) {
    this.setState(prev => {
      prev.currentState = s.Saving
      return prev
    })

    let slug = this.props.match.params.slug

    if (slug === "new") {
      // New page, send create request
      axios
        .post(API_HOST + "/page", this.state.page)
        .then(res => {
          this.setState(prev => {
            prev.currentState = s.Redirecting
            return prev
          })
        })
        .catch(err => console.log(err))
    } else {
      // Existing page, send update request
      axios
        .put(API_HOST + "/page/" + slug, this.state.page)
        .then(res => {
          this.setState(prev => {
            prev.currentState = s.Redirecting
            return prev
          })
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    let slug = this.props.match.params.slug
    let newPage = slug === "new"
    let titleToDisplay = newPage ? "New Page" : this.state.page.title

    let savingUI = <Loading />

    let edittingUI = (
      <PageWrapper mobileWrap>
        <Card>
          <CardContentWrapper maxWidth="900px">
            <div style={{ textAlign: "right" }}>
              <button onClick={this.handleEditSubmit} style={{ marginRight: "0px" }}>
                Save
              </button>
            </div>

            <Title>Editting: {titleToDisplay}</Title>

            <FormGroup>
              <label>
                Page Title <RedAsterisk />
              </label>
              <Input name="title" width="100%" onChange={this.handleChange} value={this.state.page.title} />
            </FormGroup>

            <FormGroup>
              <label>
                Slug <RedAsterisk />
              </label>
              <Input
                readOnly={!newPage}
                name="slug"
                width="100%"
                onChange={this.handleChange}
                value={this.state.page.slug}
              />
              <p>Effective URL: {MAIN_HOST + this.state.page.slug}</p>
            </FormGroup>

            <FormGroup>
              <label>Tags</label>
              <SubLabel>
                Comma-separated list of values. Tags show up on the page and are used in the search and page ranking
                algorithm.
              </SubLabel>
              <Input name="tags" width="100%" onChange={this.handleChange} value={this.state.page.tags.join(", ")} />
            </FormGroup>

            <FormGroup>
              <label>Description</label>
              <SubLabel>
                The description will only search up in search results. Its contents are factored into the search and
                page ranking algorithm.
              </SubLabel>
              <TextArea name="description" onChange={this.handleChange} value={this.state.page.description} />
            </FormGroup>

            <FormGroup>
              <label>
                Content <RedAsterisk />
              </label>
              <SubLabel>
                Styling with GitHub Flavored Markdown is supported.{" "}
                <a target="_blank" href={githubFlavoredMarkdownLink}>
                  Check out all of the full syntax here.
                </a>
              </SubLabel>
              <TextArea
                code
                height="400px"
                name="content"
                onChange={this.handleChange}
                value={this.state.page.content}
              />
            </FormGroup>
          </CardContentWrapper>
        </Card>
      </PageWrapper>
    )

    let redirectingUI = <Redirect to={"/page/" + this.state.page.slug} />

    switch (this.state.currentState) {
      case s.Editting:
        return edittingUI
      case s.Saving:
        return savingUI
      case s.Redirecting:
        return redirectingUI
    }
  }
}

module.exports = EditPage
