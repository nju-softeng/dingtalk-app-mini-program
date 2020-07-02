function getPaperResult(val) {
  if (val == 0) {
      return "待内部投票";
  } else if (val == 1) {
      return "未提交";
  } else if (val == 2) {
      return "审稿中";
  } else if (val == 3) {
      return "REJECT";
  }
}

function getVoteStatus(val) {
    if (val == undefined) {
        return "投票未开始";
    } else if (val == true) {
        return "ACCEPT";
    } else if (val == false) {
        return "REJECT";
    }
    
}




export default {
   getPaperResult,
   getVoteStatus
};