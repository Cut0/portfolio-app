export type Carrer = { title: string; content: string }
export type Skill = { id: number; name: string; image: string; content: string }
export type Sns = { id: number; name: string; image: string; link: string }

export type Profile = {
  name: string
  image: string
  job: string
  introduction: string
  careers: Carrer[]
  skills: Skill[]
  sns: Sns[]
}

export type Production = {
  name: string
  image: string
  link: string
}

export type Article = {}

export type Memo = {}
