import { View, Text } from 'react-native';

export default function PostDetails({ route }) {
    const { post } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{post.title}</Text>
            <Text style={{ marginVertical: 10 }}>{post.summary}</Text>
            <Text>{`Curtidas: ${post.likes}`}</Text>
            <Text>{`Compartilhamentos: ${post.shares}`}</Text>
        </View>
    );
}