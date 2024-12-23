import MealsGrid from "@/component/meals/meals-grid";
import classes from "./page.module.css";
import { Suspense } from "react";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created by{" "}
          <span className={classes.highlight}>YOU</span>
        </h1>
        <p>Choose your favorite recipes. It is easy and fun!</p>
        <div className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipes.</Link>
        </div>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>
      Fetching meals...
        </p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
