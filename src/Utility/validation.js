export const isValidEmail =(inputText)=>{
    const filter=/^([a-z\d\.-]+)@[a-z\\d-]+\.([a-z]{2,8})$/
     if (filter.test(inputText)) return true
        return false
        
    }
export const isValidPassword=(password)=>{
    const passwd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;;
    if(passwd.test(password)) return true
        return false
}
    