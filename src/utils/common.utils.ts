import slug from 'slug';

// request params generator
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

//slug generator
export const slugGenerator = (text:string) =>{
  return slug(text,'_');
}


// formData helper
export const setFormdata = (data:any) =>{
  const formData = new FormData();
  Object.keys(data).forEach(key=>{
    formData.append(key,data[key]);
  })
  return formData;
}

// updating objects in array
export const updateObjectInArray = (array:any,object:any) =>{
  let oldIndex = array.findIndex(((item:any)=>item.id === object.id));
  array[oldIndex] = object
  return array;
}

// antd upload dummy helper
export const dummyRequest = (data:any) => {
  const { onSuccess } = data;
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

// truncates strings as per word
export const returnLimitedWord = (text:string,count:number) =>{
  if(text.length > count){
    return text.substring(0,count-3)+ '...';
  }
  return text;
}