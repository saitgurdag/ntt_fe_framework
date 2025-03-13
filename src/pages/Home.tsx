import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Hoş Geldiniz
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Özellik 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Modern ve responsive tasarım ile kullanıcı dostu arayüz.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Özellik 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                TypeScript ile tip güvenliği ve daha iyi kod kalitesi.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Özellik 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Material UI ile modern ve tutarlı tasarım.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
