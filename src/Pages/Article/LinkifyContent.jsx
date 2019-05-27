import React from 'react';
import {Link} from 'react-router-dom';

export default ({content, map={}}) => {


  const contentArr = content.split(' ');
  let noKeyStr = "";
  let linkifiedContent = contentArr.reduce((acc, content) => {
    let temp = content;
    temp = temp.replace(/[^A-Za-z]/g, '').trim();
    if(temp in map) {
      const startIndex = content.indexOf(temp);
      const endIndex = startIndex + temp.length;
      if(noKeyStr) {
        acc.push([noKeyStr], [" "]);
      }
      else if(acc.length) {
        acc.push([" "]);
      }
      acc.push([content.substring(0, startIndex)],[<Link to={`/${temp}`}>{content.substring(startIndex, endIndex)}</Link>],[content.substring(endIndex)]);
      noKeyStr = "";
      return acc;
    }
    else {
      noKeyStr = noKeyStr ? (acc.length ? " " + noKeyStr + " " + content : noKeyStr + " " + content) : content;
      return acc;
    }
  }, []);
  if(noKeyStr) {
    linkifiedContent.push([noKeyStr]);
  }

  return linkifiedContent;
}
