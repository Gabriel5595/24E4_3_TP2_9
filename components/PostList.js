import { View, FlatList } from 'react-native';
import PostItem from './PostItem';

const posts = [
    { id: '1', title: 'Postagem 1', summary: 'Resumo da postagem 1', likes: 20, shares: 5 },
    { id: '2', title: 'Postagem 2', summary: 'Resumo da postagem 2', likes: 15, shares: 8 },
];

export default function PostList({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PostItem post={item} onPress={() => navigation.navigate('PostDetails', { post: item })} />
                )}
            />
        </View>
    );
}
