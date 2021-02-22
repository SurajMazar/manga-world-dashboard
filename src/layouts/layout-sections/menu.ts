import {
HomeOutlined,
CoffeeOutlined,
HeartOutlined,
TagsOutlined,
ReadOutlined,
SmileOutlined,
NotificationOutlined,
ZoomInOutlined,
UserSwitchOutlined,
SolutionOutlined,
BgColorsOutlined,
SettingOutlined
} from '@ant-design/icons'

interface items{
  title:string,
  Icon:any,
  path:string,
}


export const menuItems:items[]= [
  {
    title:"Dashboard",
    Icon:HomeOutlined,
    path:"/",
   },
  {
    title:"Main",
    Icon:null,
    path:"",
   },
  {
    title:"Authors",
    Icon:CoffeeOutlined,
    path:"/authors",
   },
  {
    title:"Genres",
    Icon:HeartOutlined,
    path:"/genres",
   },
  {
    title:"Tags",
    Icon:TagsOutlined,
    path:"/tags",
   },
   {
    title:"Mangas",
    Icon:ReadOutlined,
    path:"/mangas",
   },
   {
    title:"Readers",
    Icon:SmileOutlined,
    path:"/readers",
   },
  {
    title:"Ads Manager",
    Icon:null,
    path:"",
   },
  {
    title:"Advertisement",
    Icon:NotificationOutlined,
    path:"/advertisement",
   },
  {
    title:"Ads Location",
    Icon:ZoomInOutlined,
    path:"/ads-location",
   },
  {
    title:"Management",
    Icon:null,
    path:"",
   },
  {
    title:"User Management",
    Icon:UserSwitchOutlined,
    path:"/users",
   },
  {
    title:"Roles",
    Icon:SolutionOutlined,
    path:"/user-roles",
   },
  {
    title:"Settings",
    Icon:null,
    path:"",
   },
  {
    title:"Theme setting",
    Icon:BgColorsOutlined,
    path:"/theme-settting",
   },
  {
    title:"Site settings",
    Icon:SettingOutlined,
    path:"/site-setting",
   },
]