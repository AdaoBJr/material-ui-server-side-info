import React, { useEffect, useState } from 'react';
import { Grid, Stack } from '@mui/material';

import { home } from 'articles';
import { Body, Title } from 'lib/shared';
import { SxBodyHome, SxProductHome, SxSubTitleHome, SxTitleHome } from './styles';
import { Produto } from 'bff/types/domain';
import { useBFFVendas } from 'services/infra';
import { GetProduct } from 'types/domain';

interface HomeProps {
  produtoId?: string;
}
const Home: React.FC<HomeProps> = ({ produtoId = '123455' }) => {
  const [produto, setProduto] = useState<GetProduct>();

  const { getProductData } = useBFFVendas();

  const getProduct = async () => {
    const product = await getProductData(produtoId);
    setProduto(product.body);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Body sx={SxBodyHome}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Stack rowGap={7} marginLeft={{ xs: 0, sm: 12 }}>
            <Title variant="h1" sx={SxTitleHome}>
              {home.title}
            </Title>
            <Title variant="body2" sx={SxSubTitleHome}>
              {home.subTitle}
            </Title>
            <Title mt={'24px'} variant="h1" sx={SxProductHome}>
              Produto: {(produto as any as Produto)?.title}
            </Title>
          </Stack>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Home;
