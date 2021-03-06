
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>

        <div id="containers-wrap">
        <Editor
          handleChange={this.handleChange}
          markdown={this.state.markdown}
        />
        <Preview markdown={this.state.markdown} />
      </div>
        </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="editor-container">
        <h1>Editor</h1>
        <textarea
          id={"editor"}
          onChange={this.props.handleChange}
          value={this.props.markdown}
        ></textarea>
      </div>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div id="preview-container">
        <h1>Preview</h1>
        <div id={'preview'} dangerouslySetInnerHTML={{
        __html: marked(this.props.markdown)
      }}></div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
