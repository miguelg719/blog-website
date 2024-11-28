import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: {
    src: string;
    isVideo?: boolean;
  };
  date: string;
  author: any;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <section className="mt-20 mb-20 md:mb-12">
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        {coverImage.isVideo ? (
          <video 
            controls
            className="w-5/6 md:w-4/5 lg:w-3/5 rounded-lg"
          >
            <source src={coverImage.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={coverImage.src}
            alt={title}
            // ... other Image props
          />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6">
          <Avatar name={author.name} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  );
}
