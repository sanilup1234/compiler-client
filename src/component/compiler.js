import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AceEditor from "react-ace"
import Dashboard from "@material-ui/icons/Input";
import Schedule from "@material-ui/icons/ZoomOut";
import List from "@material-ui/icons/Info";
import Button from "./component/CustomButtons/Button.js";
// @material-ui/icons
import Face from "@material-ui/icons/Assessment";
import Chat from "@material-ui/icons/QuestionAnswer";
import Build from "@material-ui/icons/Code";
// core components
import TextField from '@material-ui/core/TextField';
import GridContainer from "./component/Grid/GridContainer.js";
import GridItem from "./component/Grid/GridItem.js";
import CustomTabs from "./component/CustomTabs/CustomTabs.js";
import NavPills from "./component/NavPills/NavPills"
import styles from "./assets/tabsStyle.js";
 import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import ReactMarkdown from "react-markdown"

export default class SectionTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: 'false',
    code: '// Show your creativity here !! ',
    stdout:"",
    stderr:"",
    exitCode:"",
    errorType:"",
    cpuUsage:"",
    memoryUsage:"",
    lang:"C++",
    theme:"monokai",
    input:"",
    enable:true,
    mdq : '# This is a Question header\n\n## this is smaller than Question header \n\nAnd this is a paragraph',
    mde :'# This is an Editorial header\n\n## this is smaller than Editorial header \n\nAnd this is a paragraph'
};

}
useStyles()
{
  return  makeStyles(styles);
}

callAPI(req) {
  fetch("http://52.247.56.134:9000/testAPI",req)
      .then(res => res.json())
      .then(res =>  this.setState({ apiResponse:res}))
      .then(this.setState({stdout:this.state.apiResponse["stdout"]}))
      .then(this.setState({stderr:this.state.apiResponse["stderr"]}))
      .then(this.setState({exitCode:this.state.apiResponse["exitCode"]}))
      .then(this.setState({enable:true}))
      
      

    

}

updateCode(value) {
this.setState({
  code:value,
});
}  
onSubmit()
{
this.setState({enable:false});
const coded=this.state.code
const language = this.state.lang
const inp = this.state.input
const opt={
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
},
  body: JSON.stringify({code:coded,lang:language,input:inp})
}
this.callAPI(opt)
}
// getNumbers(api) {
//     if (api) {
//         Object.keys(api).map( (key) => {
//             return this.setState({key:""+api[key]});
//         });
//     } 
// }
printop()
{
let stdoutt = this.state.stdout

return stdoutt;

}
printer()
{

let stderr = this.state.stderr
if(this.state.exitCode === 0)
{
  
  return <h4 style={{color:"green"}}>compilation successfull</h4> 
}

return stderr
}

setC()
{
this.setState({lang:"C"})
}
setCpp()
{
this.setState({lang:"C++"})
}
setPython()
{
this.setState({lang:"Python"})
}
setMonokai()
{
this.setState({theme:"monokai"})
}
setDark()
{
this.setState({theme:"twilight"})
}
setLight()
{
this.setState({theme:"github"})
}
onInput(event) {
this.setState({input: event.target.value});
}  
  render()
  {
  const classes =this.useStyles();
  
  return (
    
    <div className={classes.section}>
      <div className={classes.container}>
        <div>
          
          <GridContainer>
            <GridItem  xs={12} sm={12} md={9}>
            
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Question",
                    tabIcon: Face,
                    tabContent: (
                      <div>
                         <ReactMarkdown source={this.state.mdq} />
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.

                      </p>
                      </div>
                    )
                  },
                  {
                    tabName: "Editorial",
                    tabIcon: Chat,
                    tabContent: (
                      <div>
                         <ReactMarkdown source={this.state.mde} />
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.

                      </p>
                      </div>
                    )
                  },
                  {
                    tabName: "Write Code",
                    tabIcon: Build,
                    tabContent: (
                     <div>
                        <UncontrolledDropdown style={{float:"left"}}>
      <DropdownToggle caret color="info">
       {this.state.theme}
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem onClick={this.setMonokai.bind(this)} >monokai</DropdownItem>
        <DropdownItem onClick={this.setDark.bind(this)}>twilight</DropdownItem>
        <DropdownItem onClick={this.setLight.bind(this)}>github</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
          
        <UncontrolledDropdown style={{float:"right"}}>
      <DropdownToggle caret color="info">
        {this.state.lang}
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem onClick={this.setCpp.bind(this)}>C++</DropdownItem>
        <DropdownItem onClick={this.setC.bind(this)}>C</DropdownItem>
        <DropdownItem onClick={this.setPython.bind(this)}>Python</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    <br /><br />
                      <AceEditor
                      mode="c_cpp"
                      theme={this.state.theme}
                      fontSize={18}
                      width="100%"
                      
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      value = {this.state.code}
                      onChange={this.updateCode.bind(this)}
                      name="ace-editor"
                      editorProps={{ $blockScrolling: true }}
                    />
                    <br />
                    <Button color="info" onClick={this.onSubmit.bind(this)} disabled={!this.state.enable}>SUBMIT</Button>
                    </div>
                    )
                  }
                ]}
              />
            </GridItem>
            
            <GridItem xs={12} sm={12} md={8} lg={3}>
              <NavPills
                color="success"
                tabs={[
                  {
                    tabButton: "Input",
                    tabIcon: List,
                    tabContent: (
                      <div>
                      <br />
                      <TextField
          id="outlined-multiline-static"
          label="Input"
          value={this.state.input} 
          onChange={this.onInput.bind(this)}
          multiline
          rows={4}
          placeholder="Provide Input here"
          variant="outlined"
        /></div>
                    )
                  },
                  {
                    tabButton: "Output",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span style={{whiteSpace:"pre-wrap"}}>
                        <p>
                        {this.printop()}
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Compiler Message",
                    tabIcon: Schedule,
                    tabContent: (
                      <span style={{whiteSpace:"pre-wrap",color:"red"}}>
                        {this.printer()}
                        <br />
                      </span>
                    )
                  }
                  
                ]}
              />
            </GridItem>
        
            {/* <GridItem xs={12} sm={12} md={6}>
            <AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  theme="monokai"
  name="blah2"
 
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
  setOptions={{
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
          
              </GridItem> */}
          </GridContainer>
        </div>
      </div>
    </div>
  );
            }
}
