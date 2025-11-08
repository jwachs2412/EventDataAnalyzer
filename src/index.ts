import promptSync from "prompt-sync"

const prompt = promptSync()

interface Event {
  type: string
  title: string
  year: number
  month: number
  day: number
  seat?: string | number | null | undefined
  row?: string | number | null | undefined
}

const eventsCollection: Event[] = []

function addEvent(): void {
  let type = ""
  let title = ""
  let year = 0
  let month = 0
  let day = 0
  let seat = undefined
  let row = undefined

  while (!type) {
    type = prompt("Please enter the type of event you attended (concert, festival, or sporting event): ")
  }

  while (!title) {
    title = prompt("Who did you see or what event were you at? ")
  }

  while (isNaN(year) || year < 1950 || year > new Date().getFullYear()) {
    year = Number(prompt("What year was the event? "))
    if (isNaN(year) || year < 1950 || year > new Date().getFullYear()) {
      console.log("\nYou must enter a valid year!\n")
    }
  }

  while (isNaN(month) || month < 1 || month > 12) {
    month = Number(prompt("What month was the event? "))
    if (isNaN(month) || month < 1 || month > 12) {
      console.log("\nYou must enter a valid month!\n")
    }
  }

  while (isNaN(day) || day < 1 || day > 31) {
    day = Number(prompt("What day was the event? "))
    if (isNaN(day) || day < 1 || day > 31) {
      console.log("\nYou must enter a valid day!\n")
    }
  }

  seat = prompt("What seat were you in (optional)? ")
  row = prompt("What row were you in (optional)? ")

  const newEvent: Event = { type, title, year, month, day }
  if (seat) newEvent.seat = seat
  if (row) newEvent.row = row

  eventsCollection.push(newEvent)
  console.log("Event has been added.\n")
}

addEvent()

function listEvents(arr: Event[]): void {
  if (arr.length === 0) {
    console.log("You haven't added any events yet.")
    return
  }

  eventsCollection.forEach((event, i) => {
    console.log(`${i + 1}. ${event.title} - ${event.month}/${event.day}/${event.year}${event.row ? ", Row: " + event.row : ""}${event.seat ? " Seat: " + event.seat : ""}`)
  })
}
listEvents(eventsCollection)
