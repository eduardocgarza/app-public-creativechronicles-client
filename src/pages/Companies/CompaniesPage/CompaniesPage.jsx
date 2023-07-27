import React from "react"
import { Link } from "react-router-dom"

export default function CompaniesPage() {
  return (
    <section className="border-4 border-blue-600">

      <section className="mb-10">
        <header className="mb-4 flex">
        <h2 className="text xl font-bold">Companies</h2>
        <Link to="/companies/new" className="text-xs text-blue-600">View all</Link>
        </header>
      </section>

      
    </section>
  )
}