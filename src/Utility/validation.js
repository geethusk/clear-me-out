export const isValidEmail =(inputText)=>{
    const filter=/^([a-z\d\.-]+)@[a-z\\d-]+\.([a-z]{2,8})$/
     if (filter.test(inputText)) return true
        return false
        
    }
    