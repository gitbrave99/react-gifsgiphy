import { MaterialUIModule } from '../materialui/MaterialUIModule'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import { SyntheticEvent } from 'react'

interface GifGridProps {
    category: string
}

export const GifGrid = ({ category }: GifGridProps) => {
    const { ImageList, CircularProgress, Alert, Snackbar } = MaterialUIModule()
    const { gifsList, isLoading,isNoData, setIsNoData } = useFetchGifs(category);

    const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsNoData(false);
      };

    return (
        <>
            <h2 className='sub-title'>{category}</h2>
            {isLoading && <CircularProgress />}
            <Snackbar open={isNoData} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}>
                    No results
                </Alert>
            </Snackbar>
            <ImageList
                sx={{ width: '100%', height: 'auto' }}
                cols={4}
                variant="quilted"
                rowHeight={180}>
                {gifsList.map((item) => (
                    <GifItem key={item.id} title={item.title} url={item.url} />
                ))}
            </ImageList>

        </>
    )
}
