
import { SyntheticEvent, useState } from 'react';
import './App.css'
import { MaterialUIModule } from './materialui/MaterialUIModule'
import { AddCategory, GifGrid } from './components';

function App() {
  const { Container, Grid, Alert, Snackbar } = MaterialUIModule()
  const [categories, setCategories] = useState(["saitama"])
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>("");

  const onAddCategory = (category: string) => {
    if (categories.includes(category)) {
      setMessage("The word had already been searched for")
      setOpen(true);
      return
    }
    setCategories([category, ...categories]);
  }

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg" >
          <h3 className='title-app'>Gifs App</h3>
        <Grid container justifyContent="center" direction="row" alignItems="center" >
          <Grid item xs={14} md={8}>
            <AddCategory onAddCategory={onAddCategory} />
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </Container>
    </>
  )
}

export default App
