import { screen, render } from "@testing-library/react";
import { Layout } from "../Components/Layout";
import "@testing-library/jest-dom";
import data from "../Data/data.json";

describe("Layout", () => {
  const school = data.info;
  const schoolContact = school.contacts;

  test("render every components succesfully", () => {
    render(<Layout />);
    expect(screen.getByText(data.school_name)).toBeInTheDocument();
    expect(screen.getByText(data.class)).toBeInTheDocument();

    // SchoolInfo component
    expect(screen.getByText(school.president)).toBeInTheDocument();
    expect(screen.getByText(school.address)).toBeInTheDocument();
    expect(screen.getByText(schoolContact.email)).toBeInTheDocument();
    expect(screen.getByText(schoolContact.tel)).toBeInTheDocument();

    // StudentSelector component
    expect(screen.getByLabelText(/select a billionaire/i)).toBeInTheDocument();
    expect(screen.getByText(/ select a billionaire /i)).toBeInTheDocument();

    // Check that at least one student option is rendered
    expect(screen.getByText(data.students[0].id)).toBeInTheDocument();

    // Ifno student is selected
     expect(screen.getByText(/please select a billionaire to see details/i)).toBeInTheDocument();
  });
});
