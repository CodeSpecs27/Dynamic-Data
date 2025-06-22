import { render, screen } from '@testing-library/react';
import { StudentDetails } from '../Components/StudentDetails';
import '@testing-library/jest-dom';
import data from '../Data/data.json'

describe("StudentDetails", () => {
    const stu = data.students[0];

    test("renders student data properly", () => {
        render(<StudentDetails student={stu}/>)

        expect(screen.getByText(stu.name)).toBeInTheDocument();

        expect(screen.getByText(new RegExp(stu.id, 'i'))).toBeInTheDocument();

        Object.entries(stu.grade).forEach(([Subject,mark]) => {
            expect(screen.getByText(new RegExp(mark.toString(),'i'))).toBeInTheDocument();
        });
    });

    test("renders text when no student is selected", () => {
        render(<StudentDetails student={null}/>)
        expect(screen.getByText(/Please select a Billionaire to see details./i)).toBeInTheDocument();
    });
});