const getValue = (a) => {
    let result;
    if (a=="P" || a=="p"){
      result="PrepBytes";
    }
    else if (a=="Z" || a=="z"){
      result="Zenith";
    }
    else if (a=="E" || a=="e"){
      result="Expert Coder";
    }
    else if (a=="D" || a=="d"){
      result="Data Structure";
    }
    else{
      result="invalid value"
    }
    return result;
};

console.log(getValue(d));

