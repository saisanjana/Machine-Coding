const CustomSwitchCase = ({children, value}:any) => {
   let selected:any = [];
   let defaultCase = false;
   children.forEach((element:any) => {
        if(element.type.name === "CustomCase"){
            if(!defaultCase){
                let val = element.props.value;
                if(typeof val === "function"){
                    val = val(value)
                    if(val){
                        selected.push(element)
                    }
                }else{
                    if(val == value){
                        selected.push(element)
                    }
                }
                
            }
        }else if(element.type.name === "DefaultCase"){
            if(!selected.length || defaultCase){
                defaultCase = true;
                selected.push(element);
            }
            
        }
   });

    return(selected)
}
export const CustomCase = ({children}:any) => {
    return(children)
}
export const DefaultCase = ({children}:any) => {
    return(children)
}
export default CustomSwitchCase;