import React from 'react';

import "./style.css"
import AceEditor from "react-ace";
 import cheerio from "cheerio"
 import axios from "axios"
 import renderHTML from "react-render-html"
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import { Container,Row,Col,Button,Input,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Badge} from 'reactstrap';
let siteUrl = "https://codeforces.com/problemset/problem/918/D/";
class Compiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     html:" "
    };


}
//,stdout:res["stdout"],stderr:res["stderr"]
//
 fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};
getResults = async () => {
  const $ = await this.fetchData();

  const full_html = $(".problem-statement").html();
  console.log(full_html);
  this.setState({html:full_html})
 };
 
  render(){
    

   
 // console.log(api)
 
// let split_api = api.split(",")
// console.log(split_api)
// let stdoutt = split_api[1].split(":")[1];
// stdoutt = stdoutt.slice(1,stdoutt.length-1)
// let stderrr = split_api[0].split(":")[1];
// let exitCodee = split_api[2].split(":")[1];
// this.setState({stdout:stdoutt,stderr:stderrr,exitCode:exitCodee})

    // let options ={
    //   lineNumbers: true,
    //   matchBrackets: true,
    //   mode: "text/x-c++src", 
    //   theme:"material",
    //   keymap:"sublime",
      
    // }
   // let api = this.state.apiResponse
    
    // let stdoutt = this.state.stdout;
    // let stderrr = this.state.stderr;
    // if(stderrr === "")
    // stderrr = "Compilation Successfull";
    // <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} className="codedit"/>
   this.getResults();  
	  return(
<div><h1>Inside Temp</h1>
{renderHTML(this.state.html)}
</div>
    
  );}
}

export default Compiler;
