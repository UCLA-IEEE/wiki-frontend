import React, { Component } from "react"

import { PageWrapper, Card, CardContentWrapper } from "../components/Wrappers"
import { Title, BlueLink } from "../components/Typography"
import { FormGroup, SubLabel, Input, TextArea } from "../components/Form"

const githubFlavoredMarkdownLink = "https://github.github.com/gfm/"

// RedAsterisk is used to mark fields as required
const RedAsterisk = props => {
  return <span style={{ color: "red" }}>*</span>
}

class EditPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let slugParam = this.props.match.params.slug
    let titleToDisplay = slugParam === "new" ? "New Page" : "Old Page"

    return (
      <PageWrapper mobileWrap>
        <Card>
          <CardContentWrapper maxWidth="900px">
            <Title>Editting: {titleToDisplay}</Title>

            <FormGroup>
              <label>
                Page Title <RedAsterisk />
              </label>
              <Input name="title" type="text" width="100%" />
            </FormGroup>

            <FormGroup>
              <label>
                Slug <RedAsterisk />
              </label>
              <Input name="slug" type="text" width="100%" />
              <p>Effective URL:</p>
            </FormGroup>

            <FormGroup>
              <label>Tags</label>
              <SubLabel>
                Comma-separated list of values. Tags show up on the page and are used in the search and page ranking
                algorithm.
              </SubLabel>
              <Input name="slug" type="text" width="100%" />
            </FormGroup>

            <FormGroup>
              <label>Description</label>
              <SubLabel>
                The description will only search up in search results. Its contents are factored into the search and
                page ranking algorithm.
              </SubLabel>
              <TextArea />
            </FormGroup>

            <FormGroup>
              <label>
                Content <RedAsterisk />
              </label>
              <SubLabel>
                Styling with GitHub Flavored Markdown is supported.{" "}
                <a target="_blank" href={githubFlavoredMarkdownLink}>
                  Check out all of the full syntax here
                </a>.
              </SubLabel>
              <TextArea code={true} height="400px" />
            </FormGroup>
          </CardContentWrapper>
        </Card>
      </PageWrapper>
    )
  }
}

module.exports = EditPage
