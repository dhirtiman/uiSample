import CardFAQ from '../cards/CardFAQ';
import Heading from '../Heading';

export default function FAQPage() {
  const faqs = [
    {
      question: 'How does the AI create personalized meal plans?',
      answer:
        'Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.',
    },
    {
      question:
        'Can I integrate special dietary requirements into my meal plan?',
      answer:
        'Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly.',
    },
    {
      question: 'How does the grocery delivery service work?',
      answer:
        'We partner with trusted local grocery stores and delivery services. Once your meal plan is generated, you can review the shopping list and choose to have the items delivered to your doorstep or schedule a convenient pickup. This saves you time and ensures you always have the right ingredients for your meals.',
    },
    {
      question: 'Are there options for budget-conscious users?',
      answer:
        'Yes. Our system can optimize your meal plans to fit within your budget by recommending affordable ingredients, seasonal produce, and cost-effective recipes. You’ll also have the option to set spending preferences so your plan balances both nutrition and affordability.',
    },
    {
      question: 'How can I access nutrition education and healthy eating tips?',
      answer:
        'We provide built-in access to nutrition resources, including articles, quick guides, and video lessons created by certified dietitians. You’ll also receive tips tailored to your meal plan to help you make informed choices about portion sizes, ingredient swaps, and long-term healthy habits.',
    },
    {
      question:
        'How does the platform accommodate allergies and food sensitivities?',
      answer:
        'When setting up your profile, you can specify any allergies or intolerances such as nuts, dairy, shellfish, or gluten. The AI will automatically exclude these ingredients from your meal plans and suggest safe alternatives to make sure your meals are both enjoyable and risk-free.',
    },
    {
      question: "Can I adjust my meal plans after they've been created?",
      answer:
        'Yes, flexibility is built into the system. You can swap out meals, replace ingredients, or change serving sizes at any time. Your grocery list will update instantly to reflect the changes, giving you full control while still keeping your plan balanced and aligned with your goals.',
    },
    {
      question:
        'What makes your AI-driven meal planning different from other meal planning services?',
      answer:
        'Unlike traditional meal planning apps, our platform uses AI to continuously adapt to your preferences, progress, and feedback. It doesn’t just give you static recipes—it evolves with you, taking into account your dietary goals, shopping habits, and lifestyle. This ensures that your plans stay practical, relevant, and sustainable over time.',
    },
  ];

  return (
    <section className="mt-10 flex h-screen w-full  flex-col p-10">
      <Heading className="mt-10 ml-32">
        <span>Frequently Asked Questions</span>
        <span>Meal planning made easy: your questions, answered</span>
      </Heading>
      <div className="mt-20 grid grid-cols-2 gap-x-10 self-center-safe gap-y-3 w-3/4 ">
        {faqs.map((faq, index) => (
          <CardFAQ className="" key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
}
