import { MaterialUIModule } from "../materialui/MaterialUIModule"
interface GifItemProps {
  url: string,
  title: string
}
export const GifItem = ({ url, title }: GifItemProps) => {
  const { ImageListItem } = MaterialUIModule()
  return (
    <>
      <ImageListItem key={url}>
        <img
          src={`${url}`}
          alt={title}
          loading="lazy"
        />
      </ImageListItem>
    </>
  )
}
