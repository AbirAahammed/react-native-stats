import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Text, SafeAreaView, View , ScrollView} from 'react-native';
import { FAB } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 20,
        bottom: 20,
      },
  });

const itemsPerPage = 2;

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  {
    key: 2,
    name: 'Page 2',
  },
  {
    key: 3,
    name: 'Page 3',
  },
];

const Pie = () => {
  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.center}>

    <DataTable>
    <DataTable.Header>
      <DataTable.Title>Dessert</DataTable.Title>
      <DataTable.Title numeric>Calories</DataTable.Title>
      <DataTable.Title numeric>Fat</DataTable.Title>
    </DataTable.Header>
    <ScrollView>
    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row><DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row><DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row><DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row><DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row><DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>
    </ScrollView>
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(items.length / itemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
      />
    </DataTable>

    </View>
    <FAB
    style={styles.fab}
    large
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
    </SafeAreaView>
  );
};

export default Pie;
