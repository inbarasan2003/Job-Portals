import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

type CustomAvatar ={
    src?:string,
    alt:string,
    name?:string,
    title?:string
    imageClassName:string,
    fallbackClassName:string
}
export default function AvatarIcon(
    {
        src,
        alt,
        name,
        title,
        imageClassName,
        fallbackClassName
    }:CustomAvatar){

        const initials =name ? 
        name
        .split('')
        .map((item)=>item[0])
        .join('')
        .slice(0,2)
        .toUpperCase()
        :'NA'
    return(
        <>
         <Avatar className={imageClassName}>
      <AvatarImage src={src} 
      alt={alt} />
      <AvatarFallback className={fallbackClassName}>{initials}</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
    <p>{title}</p>
        
        </>
    )
}