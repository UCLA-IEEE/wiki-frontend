import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"
import hljs from "highlightjs"
import marked from "marked"
import { Link } from "react-router-dom"

import { PageWrapper, CardContentWrapper, Card } from "../components/Wrappers"
import { Title } from "../components/Typography"
import { CommentSection } from "../components/Comment"
import { API_HOST } from "../config"
import Loading from "../components/Loading"

const defaultSlug = "front-page"

// s is an enum of possible state values
const s = {
  Loading: 0,
  Displaying: 1
}

const Tag = styled.span`
  display: inline-block;
  margin: 10px;
  padding: 5px 25px;
  background-color: #00629b;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 15px;
`

class ContentPage extends Component {
  constructor(props) {
    super(props)

    // Initialize options for markdown parser
    marked.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value
      },
      breaks: true
    })

    this.state = { page: {}, status: s.Loading }
  }

  getPageContent() {
    let routeSlug = this.props.match.params.slug
    let slug = routeSlug ? routeSlug : defaultSlug
    axios
      .get(API_HOST + "/page/" + slug)
      .then(res => {
        res.data.content = marked(res.data.content)
        this.setState(prevState => {
          prevState.status = s.Displaying
          prevState.page = res.data
          return prevState
        })
      })
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.getPageContent()
  }

  componentDidUpdate() {
    let slug = this.props.match.params.slug || defaultSlug
    if (slug != this.state.page.slug) {
      this.getPageContent()
    }
  }

  render() {
    let slug = this.state.page.slug
    let contributors = this.state.page.contributors ? this.state.page.contributors.join(", ") : null
    let tags = this.state.page.tags ? this.state.page.tags : []
    let updatedAt = new Date(this.state.page.updatedAt).toDateString()

    let loadingUI = <Loading />

    let displayingUI = (
      <PageWrapper mobileWrap>
        <Card>
          <CardContentWrapper>
            <div style={{ textAlign: "right" }}>
              <Link to={"/edit/" + slug}>
                <button style={{ marginRight: "0px" }}>Edit</button>
              </Link>
            </div>
            <p style={{ textAlign: "right" }}>Updated: {updatedAt}</p>

            <Title>{this.state.page.title}</Title>
            <div dangerouslySetInnerHTML={{ __html: this.state.page.content }} />
          </CardContentWrapper>
        </Card>

        <Card>
          <CardContentWrapper>
            <p>
              <strong>Tags:</strong>{" "}
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </p>
            <p>
              <strong>Contributors:</strong> {contributors}
            </p>
          </CardContentWrapper>
        </Card>

        <Card>
          <CommentSection page={this.state.page} />
        </Card>
      </PageWrapper>
    )

    switch (this.state.status) {
      case s.Loading:
        return loadingUI
      case s.Displaying:
        return displayingUI
    }
  }
}

module.exports = ContentPage
