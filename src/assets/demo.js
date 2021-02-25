export const demoData = {
	"ppt_template": "择文献模板_1.pptx",
	"ppt_content": [{
			"slide_template": "title_page",
			"slide_content": {
                "main" : "Identification and external validation of IgA nephropathy patients benefiting from immunosuppression therapy\n免疫抑制剂治疗受益的IgA肾病患者的识别和外部验证",
                "sub" : "EBioMedicine\n2020-12-28"
            }
		},
		{
			"slide_template": "content_bullets",
			"slide_content": {
                "title": "论文发表信息",
                "bullets": [
                    [{"style": "B", "text": "PMID："},
                     {"style": "N", "text": "32062356"}],
                    [{"style": "B", "text": "DOI："},
                     {"style": "N", "text": "10.1016/j.ebiom.2020.102657"}],
                    [{"style": "B", "text": "期刊："},
                     {"style": "N", "text": "EBioMedicine"}],
                    [{"style": "B", "text": "发表日期："},
                     {"style": "N", "text": "2020-12-28"}],
                    [{"style": "B", "text": "关键词："},
                     {"style": "N", "text": "Glomerulonephritis、IgA nephropathy、Machine learning、Heterogeneous treatment response、Decision support、Precision medicine"}]
                ]
            }
		},
        {
			"slide_template": "content_bullets",
			"slide_content": {
                "title": "作者信息",
                "bullets": [
                    [{"style": "B", "text": "作者列表："},
                     {"style": "N", "text": "Tingyu Chen、Eryu Xia、Tiange Chen、Caihong Zeng、Shaoshan Liang、Feng Xu、Yong Qin、Xiang Li、Yuan Zhang、Dandan Liang、Guotong Xie、Zhihong Liu"}],
                    [{"style": "B", "text": "单位列表："},
                     {"style": "N", "text": "\n1. National Clinical Research Center of Kidney Diseases, Jinling Hospital, Nanjing University School of Medicine, Nanjing, 210002 Jiangsu, China\n2. IBM Research - China, Beijing, China\n3. Ping An Healthcare Technology, 9F Building B, PingAn IFC, No.1-3 Xinyuan South Road, Beijing 100027, China"}]
                ]
            }
		},
        {
			"slide_template": "content_bullets",
			"slide_content": {
                "title": "文献摘要",
                "bullets": [
                    [{"style": "B", "text": "Background："},
                     {"style": "N", "text": "Although IgA nephropathy (IgAN), an immune-mediated disease with heterogeneous clinical and pathological phenotypes, is the most common glomerulonephritis worldwide, it remains unclear which IgAN patients benefit from immunosuppression (IS) therapy."}],
                    [{"style": "B", "text": "Methods："},
                     {"style": "N", "text": "Clinical and pathological data from 4047 biopsy-proven IgAN patients from 24 renal centres in China were included. The derivation and validation cohorts were composed of 2058 and 1989 patients, respectively. Model-based recursive partitioning, a machine learning approach, was performed to partition patients in the derivation cohort into subgroups with different IS long-term benefits, associated with time to end-stage kidney disease, measured by adjusted Kaplan-Meier estimator and adjusted hazard ratio (HR) using Cox regression."}],
                    [{"style": "B", "text": "Findings："},
                     {"style": "N", "text": "Three identified subgroups obtained a significant IS benefits with HRs ≤ 1. In patients with serum creatinine ≤ 1·437 mg/dl, the benefits of IS were observed in those with proteinuria > 1·525 g/24h (node 6; HR = 0·50; 95% CI, 0·29 to 0·89; P = 0·02), especially in those with proteinuria > 2·480 g/24h (node 8; HR =  0·23; 95% CI, 0·11 to 0·50; P <0·001). In patients with serum creatinine > 1·437 mg/dl, those with high proteinuria and crescents benefitted from IS (node 12; HR = 0·29; 95% CI, 0·09 to 0·94; P = 0·04). The treatment benefits were externally validated in the validation cohort."}],
                    [{"style": "B", "text": "Interpretation："},
                     {"style": "N", "text": "Machine learning could be employed to identify subgroups with different IS benefits. These efforts promote decision-making, assist targeted clinical trial design, and shed light on individualised treatment in IgAN patients."}],
                    [{"style": "B", "text": "Funding："},
                     {"style": "N", "text": "National Key Research and Development Program of China (2016YFC0904103), National Key Technology R&D Program (2015BAI12B02)."}]
                ]
            }
		},
		{
			"slide_template": "content_figure",
			"slide_content": {
                "title": "Result - Section 1",
                "bullets": [
                    [{"style": "N", "text": "The NGR cohort I included patients retrieved consecutively from the Nanjing Glomerulonephritis Registry from January 2006 to June 2009, and the NGR cohort II included patients from July 2009 to June 2011. NGR, Nanjing Glomerulonephritis Registry; CRPIGA, Chinese Registry of Prognostic Study of IgA Nephropathy; eGFR, estimated glomerular filtration rate; IgAN, immunoglobulin A nephropathy; PAS, periodic acid–Schiff."}]
                ],
                "figure":"https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
                "legend":"Enrolment of patients for the derivation and validation cohorts. "
            }
		},       
		{
			"slide_template": "content_figure",
			"slide_content": {
                "title": "Result - Section 2",
                "bullets": [
                    [{"style": "N", "text": "Partitioning results are organised as a model-based recursive partitioning tree, where upper level nodes are split into child nodes based on certain branching criteria, thus form subgroups. Summary statistics of the nodes and branching criteria are included in the model-based recursive partitioning tree. Summary statistics of each node are shown in a grey box, which includes the node name, node size (number of patients in the node), and the hazard ratio (HR, with 95% confidence interval) for immunosuppression treatment after adjusting for confounding variables. The partitioning variable for each branching criterion is shown in a white box, with the criteria shown on the line connecting a parent node and its child node. HR, hazard ratio; Oxford_C, presence of crescent (C1: present in at least 1 glomerulus; C2: present in > 25% of glomeruli); DBP, diastolic blood pressure."}]
                ],
                "figure":"https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
                "legend":"Model-based recursive partitioning results."
            }
		},
        {
			"slide_template": "content_table",
			"slide_content": {
                "title": "Result - Section 3",
                "bullets": [
                    [{"style": "N", "text": "Sentences describing the original source."}]
                ],
                "table":{
                    "colnames": ["Variables", "Derivation Cohort (n=2058)", "Validation Cohort (n=1989)", "P Value"],
                    "cells": [
                        ["Age, years, mean (SD)", "34·8 (9·6)", "34·8 (10·3)", "0·96"],
                        ["Male", "1015 (49·3)", "1179 (59·3)", "<0·001"],
                        ["SBP, mm Hg, mean (SD)", "127·5 (18·2)", "124·1 (16·2)", "<0·001"],
                        ["DBP, mm Hg, mean (SD)", "81·8 (12·9)", "79·7 (11·7)", "<0·001"],
                        ["MAP, mm Hg, mean (SD)", "96·9 (14·4)", "94·5 (12·4)", "<0·001"],
                        ["Serum creatinine, mg/dl, mean (SD)", "1·05 (0·41)", "1·07 (0·40)", "0·07"],
                        ["eGFR, ml/min per 1·73m2, mean (SD)", "87·9 (30·6)", "88·5 (29·1)", "0·55"],
                        ["Proteinuria, g/24 hr, mean (IQR)", "1·1 (0·8 to 1·9)", "1·2 (0·8 to 2·2)", "<0·001"],
                        ["Serum albumin, g/L, mean (SD)", "38·3 (5·8)", "38·7 (6·8)", "0·05"],
                        ["Pathology", "", "", ""],
                        ["No. with data", "2058", "1674", ""],
                        ["M1", "702 (34·1)", "628 (37·5)", "0·03"],
                        ["E1", "244 (11·9)", "431 (25·7)", "<0·001"],
                        ["S1", "1571 (76·3)", "1127 (67·3)", "<0·001"],
                        ["T1-2", "516 (25·1)", "391 (23·4)", "0·22"],
                        ["C1-2", "882 (42·9)", "785 (46·9)", "0·01"],
                        ["RAS blockade", "1914 (93·0)", "1866 (93·8)", "0·30"],
                        ["Immunosuppression treatment", "655 (31·8)", "928 (46·7)", "<0·001"],
                        ["Follow-up time, years, median (IQR)", "5·8 (3·7 to 8·6)", "4·6 (2·5 to 6·7)", "<0·001"],
                        ["ESKD", "216 (10·5)", "172 (8·6)", "0·05"]
                    ]
                },
                "legend":"Description of the derivation and validation cohorts."
            }
		},   
        {
			"slide_template": "content_figure",
			"slide_content": {
                "title": "Result - Section 4",
                "bullets": [
                    [{"style": "N", "text": "Inverse probability of treatment weighting (IPTW)-adjusted Kaplan-Meier curves without end-stage kidney disease according to immunosuppression treatment in benefit nodes including node 6 (a; adjusted log-rank test P = 0·01), node 8 (b; adjusted log-rank test P = 0·007), and node 12 (c; adjusted log-rank test P = 0·007), which were stratified by model-based recursive partitioning; comparisons of curves were conducted by the adjusted log-rank test. The risk table below each figure shows the crude number of patients at risk (without adjustment of weights). IS, immunosuppression."}]
                ],
                "figure":"https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
                "legend":"IPTW-adjusted Kaplan-Meier curves without end-stage kidney disease according to immunosuppression treatment in benefit nodes."
            }
		}
	]
}