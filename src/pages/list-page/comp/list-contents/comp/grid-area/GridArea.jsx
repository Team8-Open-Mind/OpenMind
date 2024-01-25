import Grid from '@components/ui/molecules/grid';

const GridArea = ({ result }) => {
  return (
    <Grid>
      <Grid.Container>
        {result?.results.map((questionList) => {
          return <Grid.Item key={questionList.id} questionList={questionList} />;
        })}
      </Grid.Container>
    </Grid>
  );
};

export default GridArea;
