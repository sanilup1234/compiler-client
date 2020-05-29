import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AceEditor from "react-ace"
import Dashboard from "@material-ui/icons/Input";
import Schedule from "@material-ui/icons/ZoomOut";
import List from "@material-ui/icons/Info";
import Button from "./component/CustomButtons/Button.js";
// @material-ui/icons
import "./style.css"
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
 import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Input} from "reactstrap"
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import cheerio from "cheerio"
 import axios from "axios"
 import renderHTML from "react-render-html"
import hackerearth from "hackerearth-node"
import ReactMarkdown from "react-markdown"
//const siteUrl = "https://guarded-sierra-85031.herokuapp.com/https://codeforces.com/problemset/problem/918/C";
//client ID: 3dc2fff1d79d93c41f15acae78e3e8d9dfad5db539a3.api.hackerearth.com
//client secret : c10cea3bdf9680abb1daf7342ac95edfedc77a50
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
    enable:"Submit",
    mdq : '<div><h1>Loading... Please Wait...</h1></div>',
    mde :'# This is an Editorial header\n\n## this is smaller than Editorial header \n\nAnd this is a paragraph',
    url:'',
    contest_info:""
};

}
useStyles()
{
  return  makeStyles(styles);
}

// callAPI(req) {
//   fetch("http://52.247.56.134:9000/testAPI",req)
//       .then(res => res.json())
//       .then(res =>  this.setState({ apiResponse:res}))
//       .then(this.setState({stdout:this.state.apiResponse["stdout"]}))
//       .then(this.setState({stderr:this.state.apiResponse["stderr"]}))
//       .then(this.setState({exitCode:this.state.apiResponse["exitCode"]}))
//       .then(this.setState({enable:true}))
      
      

    

// }

fetchData = async () => {
  const result = await axios.get(this.state.url);
  return cheerio.load(result.data);
};
getResults = async () => {
  const $ = await this.fetchData();

  const full_html = $(".problem-statement").html();
  //console.log(full_html);
  this.setState({mdq:full_html})
 };
updateCode(value) {
this.setState({
  code:value,
});
}  
onSubmit()
{
this.setState({enable:"WAIT..."});
// const coded=this.state.code
// const language = this.state.lang
// const inp = this.state.input
// const opt={
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
// },
//   body: JSON.stringify({code:coded,lang:language,input:inp})
// }
const secret = "c10cea3bdf9680abb1daf7342ac95edfedc77a50"
let hackerEarth=new hackerearth(
  secret,  //Your Client Secret Key here this is mandatory
  ''  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
);
let config={};
config.time_limit=1;  //your time limit in integer
config.memory_limit=323244;  //your memory limit in integer
config.source=this.state.code;  //your source code for which you want to use hackerEarth api
config.input=this.state.input;  //input against which you have to test your source code
if(this.state.lang ==="Python")
config.language="Py"; //optional choose any one of them or none
else
config.language = this.state.lang
hackerEarth.run(config)
                    .then(result => {
                      this.setState({apiResponse:JSON.parse(result)})
                     // console.log(this.state.apiResponse)
                      if(this.state.apiResponse.run_status["status"]==="AC")
                      {
                      this.setState({stdout:this.state.apiResponse.run_status["output"]})
                        this.setState({exitCode:0})
                    }
                      this.setState({stderr:this.state.apiResponse["compile_status"]})
                    })
                    .catch(err => {
                      console.log(err);
                    });
//this.callAPI(opt)
this.setState({enable:"Submit"});
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
  
  return <h4 style={{color:"green"}}>Compiled Succesfully...</h4> 
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
OnChangeContest(event)
{
  this.setState({contest_info: event.target.value});
  this.setState({url:"https://guarded-sierra-85031.herokuapp.com/https://codeforces.com/problemset/problem/"+event.target.value})
}
onclickContest()
{
  
  
 this.getResults();
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
                         <Input type="text" value = {this.state.contest_info} onChange={this.OnChangeContest.bind(this)} name="contest" placeholder="Enter Contest ID with problem ID(like 918/C)" />
                         <Button color="rose" onClick={this.onclickContest.bind(this)}>Get Question</Button>
                      <div className={classes.textCenter}>
                         {renderHTML(this.state.mdq)}
                      
                      </div></div>
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
                      width="set-parent"
                      
                      showPrintMargin={true}
                      showGutter={true}
                      highlightActiveLine={true}
                      value = {this.state.code}
                      onChange={this.updateCode.bind(this)}
                      name="ace-editor"
                      editorProps={{ $blockScrolling: true }}
                    />
                    <br />
                    <Button color="info" onClick={this.onSubmit.bind(this)}>{this.state.enable}</Button>
                    </div>
                    )
                  }
                ]}
              />
            </GridItem>
            
            <GridItem xs={12} sm={12} md={8} lg={3}>
              <NavPills
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 }
              }}
                color="rose"
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
                       rows={5}
                         placeholder="Provide Input here"
                        variant="outlined"
                       />
                      <br />
                 

                     
              </div>
                    )
                  }
                   
                ]}
              />
               <NavPills
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                      color="info"
                    tabs={[
                      {
                    tabButton: "OUTPUt",
                    tabIcon: Dashboard,
                    tabContent: (
                      <div style={{whiteSpace:"pre-wrap"}}>
                      <TextField
          id="outlined-multiline-static"
          label="Output"
          value={this.printop()}
          width="set-parent"
          disabled="true"
          multiline
          rows={5}
          
          variant="outlined"
        /></div>
                )  }]} />
              <NavPills
                      horizontal={{
                        tabsGrid: { xs: 12, sm: 4, md: 4 },
                        contentGrid: { xs: 12, sm: 8, md: 8 }
                      }}
                      color="primary"
                    tabs={[
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
                    ]} />
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
