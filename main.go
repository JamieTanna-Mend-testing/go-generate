package painkiller

type Pill int

const (
	Placebo Pill = iota
	Aspirin
	Ibuprofen
	Paracetamol
	VitaminA
	Acetaminophen = Paracetamol
)
