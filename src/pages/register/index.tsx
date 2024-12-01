import {
  Box,
  Button,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { dynStyles, styles } from '../../styles/register/styles';

const Register = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { box, button } = dynStyles(isMobile);

  return (
    <Grid2
      container
      direction='column'
      alignItems='center'
      spacing={2}
      sx={styles.root}
    >
      <Typography
        variant='subtitle1'
        sx={styles.subtitle1}
        display={{ xs: 'none', md: 'flex' }}
      >
        Dana de 2024
      </Typography>
      <Typography variant='h2' sx={styles.typography} textAlign='center'>
        Registro de damnificados.
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        marginBottom='16px'
      >
        <Box sx={box}>
          <Typography variant='h4'>Registrar Fallecido</Typography>
          <Typography>
            Para registrar una persona fallecida necesitamos:
          </Typography>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '14px' }}>Foto</li>
            <li style={{ fontSize: '14px' }}>Nombre y apellidos</li>
            <li style={{ fontSize: '14px' }}>Mote (opcional)</li>
            <li style={{ fontSize: '14px' }}>Pequeña esquela</li>
            <li style={{ fontSize: '14px' }}>
              Datos de la persona que lo envía:
              <ul>
                <li>Nombre y apellidos</li>
                <li>DNI</li>
                <li>Teléfono</li>
                <li>
                  Grado de consanguinidad (deberá ser de primer o segundo grado)
                </li>
              </ul>
            </li>
          </ul>
        </Box>
        <Box sx={box}>
          <Typography variant='h4'>Registrar Desaparecido</Typography>
          <Typography>
            Para registrar una persona desaparecida necesitamos:
          </Typography>
          <ul style={{ margin: '0px' }}>
            <li style={{ fontSize: '14px' }}>Foto</li>
            <li style={{ fontSize: '14px' }}>Nombre y apellidos</li>
            <li style={{ fontSize: '14px' }}>
              Caraceterísticas o rasgos (color de ojos, altura, piercings,
              tatuajes...)
            </li>
            <li style={{ fontSize: '14px' }}>Denuncia de la desaparición</li>
            <li style={{ fontSize: '14px' }}>
              Datos de la persona que lo envía:
              <ul>
                <li>Nombre y apellidos</li>
                <li>DNI</li>
                <li>Teléfono</li>
                <li>
                  Grado de consanguinidad (deberá ser de primer o segundo grado)
                </li>
              </ul>
            </li>
          </ul>
        </Box>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
        <Stack alignItems='center' spacing={{ xs: 1, md: 3 }}>
          <MailOutlineIcon sx={styles.icon} />
          <Typography>victimasdanavalencia2024@gmail.com</Typography>
        </Stack>
        <Stack alignItems='center' spacing={{ xs: 1, md: 3 }}>
          <WhatsAppIcon sx={styles.icon} />
          <Typography>602678162</Typography>
        </Stack>
      </Stack>
      <Button variant='outlined' href='/' sx={button}>
        Ver damnificados
      </Button>
    </Grid2>
  );
};

export default Register;
