import {
  Avatar,
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
export default function NameIcon(
    {
        src,
        alt,
        name,
        title,
        imageClassName,
        fallbackClassName
    }:CustomAvatar){

       const initials = name
  ? name
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(word => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()
  : 'NA';
    return(
        <>
         <Avatar className={imageClassName}>
      <AvatarImage src={src} 
      alt={alt} />
      <AvatarFallback className={fallbackClassName}>{initials}</AvatarFallback>
    
    </Avatar>
    <p>{title}</p>
        
        </>
    )
}