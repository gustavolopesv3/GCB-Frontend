import { Card } from './styles';

interface cardProps {
  image: string;
  title: string;
  authorImg: string;
  author: string;
}

export const CardBlog = ({ image, title, author, authorImg }: cardProps) => {
  return (
    <Card>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div className="author">
        <img src={authorImg} alt="" />
        <span>{author}</span>
      </div>
    </Card>
  );
};
