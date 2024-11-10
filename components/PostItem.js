import { View, Text, TouchableOpacity } from 'react-native';

export default function PostItem({ post, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontWeight: 'bold' }}>{post.title}</Text>
            <Text>{post.summary}</Text>
            <Text>{`Curtidas: ${post.likes} | Compartilhamentos: ${post.shares}`}</Text>
        </TouchableOpacity>
    );
}
