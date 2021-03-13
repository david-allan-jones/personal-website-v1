
import { useTheme } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

export default function ProjectCarousel({ className, items }) {
    const theme = useTheme()
    function toCarouselItem({ src, alt }) {
        return <img
            style={{
                marginTop: '30px',
                backgroundColor: theme.palette.background.paper
            }}
            key={alt}
            src={src}
            alt={alt}
        />
    }

    return (
        <Carousel
            autoPlay={false}
            swipe={true}
            className={className}
            animation='slide'
        >
            {items.map(toCarouselItem)}
        </Carousel>
    )
}