export const useFilter = ({ data, category }) => {

    let list = []

    if(category !== undefined){
        data.map(element => {
            if(element.category == category){
                list = [...list, element]
            }
        });
    }else{
        list = data;
    }
    
    return [list] 
}
