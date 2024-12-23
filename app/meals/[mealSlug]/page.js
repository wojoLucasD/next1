import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import NotFound from "../not-found";


export default function MealsDetailsPage({params}) {

    const meal = getMeal(params.mealSlug);

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    if (!meal) {
        NotFound();
    }

  return (
    <>
      <h1 className={classes.header}>
        <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
            <h1>
                {meal.title}
            </h1>
            <p className={classes.creator}>
                By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>
                {meal.summary}
            </p>
        </div>
      </h1>

      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
            __html: meal.instructions,
        }}>

        </p>
      </main>
    </>
  );
}
