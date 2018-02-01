import {WorkflowFactory} from "cwlts/models";
import {Workflow, SVGArrangePlugin} from "cwl-svg";

import "cwl-svg/src/assets/styles/themes/rabix-dark/theme";

import bcbio from "./bcbio";
import fastqc from "./subworkflow";

const samples = [
    WorkflowFactory.from(bcbio),
    WorkflowFactory.from(fastqc)
];

const svgRoot = document.getElementById("svg");
const workflow = new Workflow({
    model: samples[0],
    svgRoot: svgRoot,
    plugins: [new SVGArrangePlugin()]
});

// Listen for button click
document
    .getElementById('replace')
    .addEventListener('click', () => {
        samples.reverse();
        workflow.draw(samples[0]);
    });
