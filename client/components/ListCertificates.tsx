import React, { use } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { SERVER_URL } from '@/consts/consts';
import Certificate from '@/components/Certificate';
import BlockText from '@/components/BlockText';
import { List } from '@mui/joy';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

const ListCertificates = () => {
  const { certificates } = useTypedSelector(state => state.certificate)
  const textTitle: string = "Сертификаты: ";
  const stylesTitle: string = "title-h1";
  return (
    <>
      <BlockText styles={stylesTitle} text={textTitle} />
      <Grid
        container
        direction="row"
        className="articles-list"
        sx={{
          justifyContent: "space-around",
          alignItems: "flex-start",
        }
      }>
        <Box sx={{
          width: '80%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',

          }}
        >
          {
            certificates.map((item) =>
             <Certificate certificate={item} />
            )
          }
        </Box>
      </Grid>
    </>
  )
}
export default ListCertificates;
