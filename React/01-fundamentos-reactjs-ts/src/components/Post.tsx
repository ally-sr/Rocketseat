import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}


interface PostProps{
    post: PostType
}

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}


export function Post({post}: PostProps){

    const [comments, setComments] = useState([
        'Post legal!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    const publishedDateFromatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix: true})

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarUrl} alt=''/>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFromatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href=''>{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    value={newCommentText}
                    name='comment'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
               <footer>
                    <button type='submit'>
                        Publicar
                    </button>
               </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}