"use client";
import { useRouter } from 'next/router';

export default function Service () {
  const router = useRouter();
  const name = router.query.name;
  return( <div>Service: {name}</div>);
};