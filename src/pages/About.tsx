import { Box, Typography, Paper, Avatar } from '@mui/material';
import { Business as BusinessIcon } from '@mui/icons-material';

export default function About() {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
          <BusinessIcon />
        </Avatar>
        <Typography variant="h4">Hakkımızda</Typography>
      </Box>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" paragraph>
          Biz, modern web teknolojilerini kullanarak yenilikçi çözümler üreten
          bir ekibiz. React, TypeScript ve Material UI gibi güncel teknolojileri
          kullanarak kullanıcı dostu ve performanslı uygulamalar geliştiriyoruz.
        </Typography>
        <Typography variant="body1" paragraph>
          Misyonumuz, müşterilerimize en iyi kullanıcı deneyimini sunmak ve
          teknolojik çözümlerle işlerini bir adım öteye taşımaktır.
        </Typography>
        <Typography variant="body1">
          Vizyonumuz, sürekli gelişen teknoloji dünyasında öncü olmak ve
          yenilikçi çözümlerle fark yaratmaktır.
        </Typography>
      </Paper>
    </Box>
  );
}
