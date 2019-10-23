const _Modules_ = {
  userAgent () {
    let agent = false;
    let filter = "win16|win32|win64|mac|macintel";

    if ( navigator.platform ) {
      if ( filter.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        agent = false
      }else {
        if ( filter.indexOf("win16|win32|win64") < 0 ) {
          agent = true
        }
      }
    }
    return agent;
  }
}

export default _Modules_
