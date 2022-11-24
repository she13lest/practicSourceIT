const substrCount = (input, needle, offset, length) => {
  let newStr = input.slice(offset)  
  console.log(newStr)
  
  return newStr.slice(0, length).split(needle).length-1

}

substrCount ('Good on on on on Golly on on Miss on on on on Molly', 'on', 7, 10);




