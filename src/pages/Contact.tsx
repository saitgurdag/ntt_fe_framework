import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function Contact() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        İletişim
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Adınız"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="E-posta"
              variant="outlined"
              margin="normal"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Konu"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mesajınız"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" endIcon={<SendIcon />} size="large">
              Gönder
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
