import { useAppDispatch } from "app/store";
import { create } from "entities/card";
import { decksSelector } from "entities/decks";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const CreateCard = () => {
  const dispatch = useAppDispatch();
  const decks = useSelector(decksSelector);

  return (
    <Formik
      initialValues={{
        text: "",
        deck: "draft",
      }}
      onSubmit={(values, helper) => {
        dispatch(
          create({
            category: "regular",
            text: values.text,
            deck: values.deck,
            id: uuid(),
          })
        );
        helper.setFieldValue("text", "");
      }}
    >
      {() => (
        <Form>
          <label>
            Card
            <Field name="text" as="textarea" />
          </label>

          <label>
            Deck
            <Field name="deck" as="select">
              {decks.map((deck, i) => (
                <option key={i} value={deck.name}>
                  {deck.name}
                </option>
              ))}
            </Field>
          </label>

          <button type="submit">create</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCard;
