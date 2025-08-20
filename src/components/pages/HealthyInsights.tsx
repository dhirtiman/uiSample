import Rectangle from '../shapes/Rectangle';
import Heading from '../Heading';
import CardArticle from '../cards/CardArticle';

import articleImage1 from '../../assets/article/articleImage1.jpg';
import articleImage2 from '../../assets/article/articleImage2.jpg';
import articleImage3 from '../../assets/article/articleImage3.jpg';

export default function HealthyInsights() {
  return (
    <section className="bg-tertiary relative flex h-fit w-full flex-col px-15 py-23">
      <Rectangle className="absolute -top-1/10 left-0 rotate-180" />
      <Heading className="ml-32">
        <span>Healthy Insights</span>
        <span>Latest News, Expert Blogs, and Nutritional Learning</span>
      </Heading>
      <div className="mt-20 flex h-fit w-full flex-row gap-5 ">
        <CardArticle
          title="Mastering Meal Prep: Time-Saving Tips for Busy Weekdays"
          image={articleImage1}
          alt="article 1 "
        ></CardArticle>
        <CardArticle
          title="Mastering Meal Prep: Time-Saving Tips for Busy Weekdays"
          image={articleImage2}
          alt="article 2"
        ></CardArticle>
        <CardArticle
          title="Mastering Meal Prep: Time-Saving Tips for Busy Weekdays"
          image={articleImage3}
          alt="article 3"
        ></CardArticle>
      </div>
    </section>
  );
}
