import slug from 'slug';

export const paramsUrl = (url:string,params:any) =>{
  Object.keys(params).forEach((key,i)=>{
    if(i===0){
      url += `?${key}=${params[key]}`;
    }else{
      url += `&${key}=${params[key]}`
    }
  })
  return url;
}

export const slugGenerator = (text:string) =>{
  return slug(text,'_');
}


// formData helper

export const setFormdata = (data:any) =>{
  if(data){
    const formData = new FormData();
    Object.keys(data).forEach(key=>{
      formData.append(key,data[key]);
    })
  }
  return data;
}

export const updateObjectInArray = (array:any,object:any) =>{
  let oldIndex = array.findIndex(((item:any)=>item.id === object.id));
  array[oldIndex] = object
  return array;
}