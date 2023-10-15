import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Page(){
  return(
  <>
  <h1>CPRG 306: Web Development 2 - Assignments</h1>
  <StudentInfo />
  <Link href="/week2">Week-2</Link>
  <br />
  <Link href="/week3">Week-3</Link>
  <br />
  <Link href="/week4">Week-4</Link>
  </>
  );
}